package services

import (
	"bufio"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"log"
	"os"
	"strings"
	"syscall"

	"github.com/fsnotify/fsnotify"
)

var filesToWatch []string

func Daemonize() {
	pid, err := syscall.ForkExec(os.Args[0], os.Args, &syscall.ProcAttr{
		Files: []uintptr{0, 1, 2}, // Redirect std input/output
		Sys:   &syscall.SysProcAttr{Setsid: true},
	})

	if err != nil {
		log.Fatal("Failed to start daemon:", err)
	}

	fmt.Println("Daemon started with PID:", pid)
	os.Exit(0) // Exit parent process
}

func ScanPath(n int) {
	reader := bufio.NewReader(os.Stdin)

	for i := 0; i < n; i++ {
		fmt.Print("Enter The File Path: ")
		input, _ := reader.ReadString('\n')
		input = strings.TrimSpace(input)
		filesToWatch = append(filesToWatch, input)
	}

	fmt.Println("Number of file paths recorded:", len(filesToWatch))
}

func MonitorFile() {
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		log.Fatal("Error creating file watcher:", err)
	}
	defer watcher.Close()

	for _, file := range filesToWatch {
		err = watcher.Add(file)
		if err != nil {
			log.Println("Warning: Could not watch", file, "-", err)
		} else {
			log.Println("Watching:", file)
		}
	}

	// Listen for events
	for {
		select {
		case event, ok := <-watcher.Events:
			if !ok {
				return
			}
			log.Println("Event:", event)
			if event.Op&fsnotify.Write == fsnotify.Write {
				HandleFileChange(event.Name)
			}
		case err, ok := <-watcher.Errors:
			if !ok {
				return
			}
			log.Println("Error:", err)
		}
	}
}

func HandleFileChange(filePath string) {
	hash, err := ComputeSHA256(filePath)
	if err != nil {
		log.Println("Error computing hash:", err)
		return
	}
	log.Println("File modified:", filePath)
	log.Println("New SHA256 hash:", hash)

	// TODO: Push hash to Ethereum smart contract
}

func ComputeSHA256(filePath string) (string, error) {
	data, err := os.ReadFile(filePath)
	if err != nil {
		return "", err
	}
	hash := sha256.Sum256(data)
	return hex.EncodeToString(hash[:]), nil
}
