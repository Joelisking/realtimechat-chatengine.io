/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '4aae1f9e-4c63-4838-9208-8e184c16f04f',
    props.user.username
  );
  return (
    // <div style={{ height: '100vh' }}>
    //   <MultiChatSocket {...chatProps} />
    //   <MultiChatWindow {...chatProps} style={{ height: '100vh' }} />
    // </div>

    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId="4aae1f9e-4c63-4838-9208-8e184c16f04f"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100vh' }}
      />
    </div>
  );
};
export default ChatsPage;
