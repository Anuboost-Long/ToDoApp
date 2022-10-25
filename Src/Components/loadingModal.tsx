import React from 'react';
import {Modal} from 'react-native';
import Loader from 'react-native-modal-loader';
import COLORS from '../Constants/colors';

interface loadingprop {
  visible: boolean;
}
export default function LoadingModal({visible = false}: loadingprop) {
  return (
    <Modal animationType="none" transparent={true} visible={visible}>
      <Loader
        loading={true}
        color={COLORS.primary}
        size="large"
        opacity={0.1}
      />
    </Modal>
  );
}
