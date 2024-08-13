import React, { ReactNode } from 'react';
import { Image, TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import images from '../../assets/images';

interface MenuBtnProps extends TouchableOpacityProps {
  children: ReactNode;
  mode?: 'contained' | 'outlined'; // You can define the modes you want to support
  image: any;
}

const MenuBtn: React.FC<MenuBtnProps> = ({
  children,
  mode = 'contained',
  style,
  image,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Image
        source={image}
        style={[styles.image, styles.left_image]}
      />
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: '#ff0000'
  },
  image: {
    // maxWidth: Dimensions.get('window').width,
    // height: '100%',
    // position: 'absolute',
    // top: 0,
    // zIndex: -1,
  },
  left_image: {
    left: 0,
  },
  btnText: {
    fontFamily: 'Sansation Bold',
    fontSize: 15,
    fontWeight: '700',
    color: 'black'
  }
});

export default MenuBtn;
