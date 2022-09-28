package main

import (
	"fmt"
	"math/rand"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func main() {

	var startTime = time.Now()
	ch := make(chan int)
	var StartInsert time.Time

	//go routine prints systime and execution time to console
	go func() {
		//print every 30 seconds
		for {
			fmt.Println(time.Now().Format(time.RFC850), "-> Programmlaufzeit:", time.Since(startTime))
			time.Sleep(2 * time.Second)
		}
	}()

	//go routine inserts random numbers in the channel
	go func() {
		//send first random number into channel and set startInsert time
		ch <- rand.Intn(9 - 0)
		StartInsert = time.Now()

		for {
			//every 1 to 3 seconds
			time.Sleep(time.Duration(rand.Intn(3-1)) * time.Second)
			//send random number between 0 and 9 into channel
			ch <- rand.Intn(9 - 0)
		}
	}()

	//go routine in which channel data is received
	go func() {
		for {
			//start 10 seconds after first insert
			seconds := time.Since(StartInsert).Seconds()
			if int(seconds) >= 10 {
				//receive message from channel
				msg := <-ch
				fmt.Println(msg)
				time.Sleep(time.Millisecond * 500)
			}
		}
	}()

	c := make(chan os.Signal)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	<-c
	os.Exit(1)
}
