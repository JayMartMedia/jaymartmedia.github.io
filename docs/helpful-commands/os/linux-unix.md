# Linux/Unix

## Compressing files (tar)

Resource: [https://angular.io/cli/generate#component](https://www.tecmint.com/18-tar-command-examples-in-linux/)

`tar -cvf documents.tar /home/jmm/documents/` Create a tar file 
- -cvf = compress, verbose (list files), filename (to be compressed into)
- documents.tar = the output file containing files
- /home/jmm/documents/ = input directory or file

`tar -xvf documents.tar -C /home/jmm/new-documents/` Extract from a tar file
- -xvf = eXtract, verbose (list files), filename (to extract from)
- documents.tar = .tar file to extract from
- -C = directory to extract into

## SSH

Resource: https://linux.die.net/man/1/ssh

`ssh jmm@192.168.1.123` SSH into server at 192.168.1.123 as user "jmm" (will be asked for password if ssh keys not setup)

`ssh jmm@192.168.1.123 ls` Run the ls command on the server at 192.168.1.123 and show results of command in local machine terminal

## SCP

Resource: https://linux.die.net/man/1/scp

`scp pi@192.168.1.123:/home/jmm/.bashrc /home/jmm/` use SCP to copy .bashrc file from server at 192.168.1.123 to local machine /home/jmm/ directory

`scp /home/jmm/.bashrc pi@192.168.1.123:/home/jmm/` use SCP to copy .bashrc file from local machine to server at 192.168.1.123

## GREP

Resources:

- General: https://www.geeksforgeeks.org/grep-command-in-unixlinux/
- Exclude with grep: https://linuxize.com/post/grep-exclude/

`grep Docker ./readme.md` search for all lines that contain "Docker" in the readme.md file

`grep -r --exclude-dir=node_modules Docker` search for all lines that contain "Docker" recursively excluding the node_modules directory

`grep -r --exclude=*.{png,jpg} Docker` search for "Docker" recursively and exclude files of type .png and .jpg

`grep -Irn Docker` recursively search for "Docker" while excluding binary files and return the line number

> -I -- process a binary file as if it did not contain matching data;  
> -n -- prefix each line of output with the 1-based line number within its input file  
> -i -- case insensitive search

## CURL

`curl https://www.website.com/file.pdf --output file.pdf` Download the file at the web address specified and save to an output file

`curl -k https://www.website.com/file.pdf --output file.pdf` allow insecure/self-signed-cert

## Network

`lsof -i -P -n | grep LISTEN` Check open ports

## File system

`df` - see which partition is biggest

`du -h --max-depth 1 {path to directory}` - check file/directory size for sub-directories of the specified directory (-h makes sizes display their unit, max-depth shows how deep the check goes)

`sudo du -h --max-depth 1 {path to directory} | grep '[0-9\,]\+G' | sort -nr` - check file directory size, filter to only GB, sort descending 

## Command History Tricks

### View recent commands

`history` - view recent commands

`history | grep -i "cargo"` - view recent commands in history that include "cargo", -i is case-insensitive

`!dotnet:p` - display the most recent command that started with "dotnet"

`!12:p` - display the command at index 12

### Rerun recent commands

`CTRL + p` - paste in the most recent command that you ran, need to hit enter to run

`!!` - immediately rerun last command

`!dotnet` - immediately rerun last command that started with "dotnet"

`!12` - immediately rerun command at index 12

## Misc
`diff <(ls old) <(ls new)` diff the output of two commands (such as comparing the contents of two directories)

`echo -n "string to encode here" | base64 -w 0` base64 encode a string. -n removes the newline character when echoing, -w 0 prevents auto wrapping lines (default is 76 chars, `base64 --help` for more info)

`printf '%-32s' "Here is text!" >> /dev/ttyS3` print a string padded with spaces to 32char and send to serial device

`date -u --iso-8601=s` - get current UTC date and time in ISO-8601 to second precision, outputs as `2025-01-20T04:24:03+00:00`

Read in a secret value (such as a password) from the command line so that it doesn't appear in shell history:
```sh
#!/bin/sh
echo -n "Enter secret: "   # echo text with no newline
read -s secret             # read in secret without showing chars
echo $secret               # do something with secret value (defo don't echo it)
```

Read a secret value, base64 encode it, and save in .env file. This can be useful if you want to convert to base64, but don't want your secret visible in history
```sh
read -s secret && echo -n $secret | base64 > .env
```