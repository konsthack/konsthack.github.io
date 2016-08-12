---
layout: post
title: "Sound_Raspberry"
date: "2016-07-20"
procent: "40"
img: https://dl.dropboxusercontent.com/u/1882061/konsthack/Satellite.jpg
summery: ... Satellite CCRMA is a Raspberry Pi that includes Pure Data, Arduino, Python and Supercollider. It is a platform for building embedded musical instruments and embedded art installations by Edgar Berdahl and Wendy Ju. 
json: {"tests":[
        {   "testName":"Puredata Arduino Potentiomenters", 
            "Date":"2016-07-20",
            "Status":"In progress",
            "Progression":"80",
            "Comments": ["sudo raspi-config to change keyboard layout", "you need pdsend in /usr/bin/"],
            "Assert":"Potentiometer to control sinus tons",
            "Images": ["https://dl.dropboxusercontent.com/u/1882061/konsthack/arduino.jpg"],  
            "Links": ["https://github.com/konsthack/arduino_exampels/blob/master/basic_pot", "https://github.com/palletorsson/pd_python/edit/master/python/pd.py", "http://workshopweekend.net/arduino/labs/exploring-color", "http://wendyju.com/publications/satellite_ccrma.pdf"]
        },
        {   "testName":"Python Puredata connection", 
            "Date":"2016-05-30",
            "Status":"Success",  
            "Progression":"100",
            "Comments": ["see link for code example", "start all programs in sudo from the command line"],
            "Assert":"Python and Puredata connects",
            "Images": [], 
            "Links": ["https://guitarextended.wordpress.com/2012/11/03/make-python-and-pure-data-communicate-on-the-raspberry-pi/", "https://github.com/palletorsson/pd_python"]
        },
        {   "testName":" Interactive Sound Pi Install", 
            "Date":"2016-05-20",
            "Status":"Success",
            "Progression":"100",
            "Comments": ["Log in with", "User: pi  Password: raspberry", "Start in Sudo from programs to work", "Command: $ sudo startx ", "See link for installation"],
            "Assert":"Sound Pi is installed from Sound Pi image",
            "Images": [],  
            "Links": ["https://ccrma.stanford.edu/~eberdahl/Satellite/", ]
        }
    ]}
---
<div class="test-target"></div>


Code Exampel: 

import os 
import time
import serial

arduino = serial.Serial("/dev/ttyACM0", 9600, timeout=5)
time.sleep(1)

top = 10
bottom = 0
interval = 1

arduino.flush()

def getValue(): 
    value = arduino.readline()
    time.sleep(1)
    return value
    
def send2Pd(message=''):
    os.system("echo '" + message + "' | pdsend 3000")

def setVolume(vol):
    message = '1 ' + str(vol) + ';'
    print message
    send2Pd(message)

def up(): 
    for i in range(bottom, top, interval):
        setVolume(i) 
        time.sleep(0.1)

def down():
    for i in range(top, bottom, -interval):
        setVolume(i) 
        time.sleep(0.1)

while True:
   value = getValue()
   setVolume(value)
