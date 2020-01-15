import React, { Component } from 'react';
import AudioAnalyser from './AudioAnalyser';
import UploadFile from '../UploadFile/UploadFile';

class Music extends Component {
    constructor(props) {
        super(props);
        this.ref = null;

        this.state = {
            audio: null,
            mp3: null,
            isOpen: true,
        };
    }

    handleOpen = () => this.setState({
        isOpen: !this.state.isOpen,
        mp3: null,
    });

    handleUrl = fileURL =>  this.setState({ mp3: fileURL });

    setAudioStream = async () => {
        const stream = this.ref.captureStream();

        await this.ref.play();

        if (!this.state.audio) {
            this.setState({ audio: stream });
        }
    };

    componentWillUnmount() {
        if (this.state.audio) {
            this.state.audio.getTracks()
                .forEach((track) => track.stop());
        }

        this.setState({
            audio: null,
            mp3: null,
        });
    }

    render() {
        const { mp3, audio } = this.state;

        return (
            <>
                <div className="row m-1 my-2 w-100" onClick={this.handleOpen}>
                    <div className="col">
                        Music
                    </div>
                </div>
                <div className="row m-1 p-3 w-100" style={{ border: '2px solid', borderRadius: '5px'}}>
                    {this.state.isOpen ? (
                        <>
                            <UploadFile
                                handleUrl={this.handleUrl}
                            />

                            <div className="controls">
                                <audio
                                    onPlay={this.setAudioStream}
                                    onPause={() => this.setState({ audio: null, mp3: null })}
                                    ref={(r) => this.ref = r}
                                    controls
                                    src={mp3}>
                                </audio>
                            </div>
                            {this.state.audio ? (
                                    <AudioAnalyser
                                        audio={audio}
                                        socket={this.props.socket}
                                    />
                                ) : ''
                            }
                        </>
                        ) : (
                            <div>...</div>
                        )
                    }
            </div>
        </>
        );
    }
}

export default Music;
