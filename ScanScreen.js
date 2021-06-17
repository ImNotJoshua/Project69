import React from 'react';
import {Stylesheet, Text, View, Image} from 'react-native';

export default class ScanScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'
        }
    }
}

/* Ma'am I don't know what the steps meant in step 4 so I'm sorry that I on submitted this much and I hope we 
can complete it in extra class tommorow */
