package main

import (
	"fmt"
	"github/Er-Sadiq/Decentralized-File-Integrity-Daemon/services"
	"os"
	"time"
)

func main() {
	if len(os.Args) > 1 && os.Args[1] == "daemon" {
		services.Daemonize()
	}

	// Ask the user for file paths
	services.ScanPath(2)

	// Start monitoring files
	go services.MonitorFile()

	// Simulate keeping the program running
	for {
		time.Sleep(time.Second * 10)
		fmt.Println("Daemon is running...")
	}
}
