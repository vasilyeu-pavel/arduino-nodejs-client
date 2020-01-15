import React, { Component } from 'react';
import memoize from '../../helpers/memo';

const memoized = memoize();

class AudioAnalyser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audioData: new Uint8Array(0)
        };
    }

    componentDidMount() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

        this.analyser = this.audioContext.createAnalyser();

        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);

        this.source = this.audioContext.createMediaStreamSource(this.props.audio);
        this.source.connect(this.analyser);

        this.rafId = requestAnimationFrame(this.tick);
    }

    getFrequence = () => ((this.dataArray[this.dataArray.length - 1]) / 100 * 4).toFixed(0);

    sendToServer = (value) => {
        const socket = this.props;
        if (!value) return;

        socket.send(`5${value}`);
    };

    tick = async () => {
        this.analyser.getByteTimeDomainData(this.dataArray);
        this.setState({
            audioData: this.dataArray
        });

        await new Promise(res => setTimeout(() => res(), 300));

        const value = this.getFrequence();

        this.sendToServer(memoized(value));

        this.rafId = requestAnimationFrame(this.tick);
    };

    componentWillUnmount() {
        cancelAnimationFrame(this.rafId);
        this.analyser.disconnect();
        this.source.disconnect();
    }

    render() {
        return null;
    }
}

export default AudioAnalyser;
