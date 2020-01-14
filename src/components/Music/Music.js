import React, { Component } from 'react';
import AudioAnalyser from './AudioAnalyser';

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audio: null,
            file: null,
        };
    }

    setAudioStream = async () => {
        const stream = this.ref.captureStream();

        await this.ref.play();

        this.setState({ audio: stream });
    };

    handleFile = e => {
        const file = e.target.files[0];
        const fileURL = window.URL.createObjectURL(file);

        this.setState({ mp3: fileURL });
    };

    render() {
        return (
            <>
                <div className="row m-1 my-2 w-100">
                    <div className="col">
                        Music
                    </div>
                </div>
                <div
                    className="row justify-content-center m-1 py-3 w-100"
                    style={{
                        border: '2px solid',
                        borderRadius: '5px'
                    }}
                >
                <form>
                    <div className="form-group">
                        <input
                            type="file"
                            className="form-control-file"
                            onChange={this.handleFile}
                        />
                    </div>
                </form>
                <div className="controls">
                    <audio
                        onPlay={this.setAudioStream}
                        ref={(r) => this.ref = r}
                        id="id1"
                        controls
                        src={this.state.mp3}>
                    </audio>
                </div>
                {this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : ''}
            </div>
        </>
        );
    }
}

export default Music;
