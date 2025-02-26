// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract FileIntegrity {
    struct FileRecord {
        string hash;
        uint256 timestamp;
    }

    mapping(string => FileRecord) public fileHashes; // Maps file path to its last known hash

    event FileUpdated(string filePath, string hash, uint256 timestamp);

    function updateFileHash(string memory filePath, string memory fileHash) public {
        fileHashes[filePath] = FileRecord(fileHash, block.timestamp);
        emit FileUpdated(filePath, fileHash, block.timestamp);
    }

    function getFileHash(string memory filePath) public view returns (string memory, uint256) {
        return (fileHashes[filePath].hash, fileHashes[filePath].timestamp);
    }
}
