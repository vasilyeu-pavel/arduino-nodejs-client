import React, { Component } from 'react';
import memoize from '../../helpers/memo';

class AudioAnalyser extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            audioData: new Uint8Array(0),
            value: null,
        };
    }

    componentDidMount() {
        this._isMounted = true;
        this.memoized = memoize();

        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

        this.analyser = this.audioContext.createAnalyser();

        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);

        this.source = this.audioContext.createMediaStreamSource(this.props.audio);
        this.source.connect(this.analyser);
        this.rafId = requestAnimationFrame(this.tick);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { value } = this.state;

        const memoizedValue = this.memoized(value);

        if (memoizedValue) {
            this.props.socket.send('5' + memoizedValue);
        }
    }

    getFrequence = () => ((this.dataArray[this.dataArray.length - 1]) / 100 * 4).toFixed(0);

    tick = async () => {
        this.analyser.getByteTimeDomainData(this.dataArray);

        if (this._isMounted) {
            await new Promise(res => setTimeout(() => res(), 300));

            const value = this.getFrequence();

            this.setState({
                audioData: this.dataArray,
                value,
            });

            this.rafId = requestAnimationFrame(this.tick);
        }
    };

    componentWillUnmount() {
        this._isMounted = false;

        cancelAnimationFrame(this.rafId);
        this.analyser.disconnect();
        this.source.disconnect();

        this.props.socket.send('00');
    }

    render() {
        return null;
    }
}

export default AudioAnalyser;
