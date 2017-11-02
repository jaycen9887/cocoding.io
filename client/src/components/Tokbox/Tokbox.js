import React from "react";
import { OTSession, OTPublisher, OTStreams, OTSubscriber, createSession, preloadScript } from 'opentok-react';

class Tokbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { streams: [] };
    }

    componentWillMount() {
        this.sessionHelper = createSession({
            apiKey: '45957952',
            sessionId: '2_MX40NTk1Nzk1Mn5-MTUwOTQxNjE5NzcwMH4vaFVqdlN6cDNTQnF1eDBpcHcvRDQvL1F-fg',
            token: 'T1==cGFydG5lcl9pZD00NTk1Nzk1MiZzaWc9YTljNTJhZDhmNDNkNjE4NTVkMDFiN2U2MmYzYzhlMGUzNDY5YjMyZTpzZXNzaW9uX2lkPTJfTVg0ME5UazFOemsxTW41LU1UVXdPVFF4TmpFNU56Y3dNSDR2YUZWcWRsTjZjRE5UUW5GMWVEQnBjSGN2UkRRdkwxRi1mZyZjcmVhdGVfdGltZT0xNTA5NDE2MjMyJm5vbmNlPTAuMzA3OTg1NTgzNjc2NDA4NSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTEyMDExODMxJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9',
            onStreamsUpdated: streams => { this.setState({ streams }); }
        });
    }

    componentWillUnmount() {
        this.sessionHelper.disconnect();
    }

    render() {
        return (
            <div>

                <OTPublisher session={this.sessionHelper.session} />

                {this.state.streams.map(stream => {
                    return (
                        <OTSubscriber
                            key={stream.id}
                            session={this.sessionHelper.session}
                            stream={stream}
                        />
                    );
                })}
            </div>
        );
    }
}

//export default Tokbox;
export default preloadScript(Tokbox);
