'use strict'

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var MainWindow = null;



app.on('ready', function(){

  MainWindow = new BrowserWindow({height:300, width:300});

  MainWindow.loadURL("file://"+__dirname+"index.html");

  MainWindow.on( 'closed', function(){
        console.log("i don't like to be closed");
        MainWindow = null;
  }
  )
}
)

app.on("windows-all-closed", function(){
  app.quit();
})
