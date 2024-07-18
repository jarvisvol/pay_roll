import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { MD2Colors } from 'react-native-paper';

const IconButton = ({ onPress, iconSource, iconStyle, buttonStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...buttonStyle, color:MD2Colors.red300}} >
      <Image
        source={iconSource}
        style={iconStyle}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
