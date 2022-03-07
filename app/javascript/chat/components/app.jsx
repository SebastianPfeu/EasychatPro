import React from 'react';
import { useParams } from 'react-router-dom';
import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

const App = () => {
  const params = useParams();
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img className="messaging-logo" src="assets/images/logo.svg" alt="logo" />
      </div>
      <ChannelList selectedChannel={params.channel} />
      <MessageList selectedChannel={params.channel} />
    </div>
  );
};

export default App;
