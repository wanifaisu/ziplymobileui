import {useWindowDimensions, StyleSheet, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {colors} from '../../utils/Colors';
import {Spaces} from '../../utils/Spacing';
import {Size} from '../../utils/Size';
import IconButton from '../UI/IconButton';
import { Labels } from '../../utils/Labels';
import { Fonts } from '../../utils/Fonts';

const VideoPlay = ({videoUrl}) => {
  const video = useRef(null);
 
  const {styles} = useStyle();
  
  return (
    <View style={styles.videoContainer}>
    <View style={styles.playBox}>
    </View>
        {/* <Video
          ref={video}
          style={styles.playBox}
          source={{
            uri: videoUrl,
          }}
          controls={true}
          resizeMode="contain"
          isLooping
        /> */}
      
    </View>
  );
};

export default VideoPlay;
const useStyle = () => {
  const {height, width} = useWindowDimensions();

  const styles = StyleSheet.create({
    videoContainer: {
      backgroundColor: colors.green,
      padding: Spaces.lg,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    spinnerTextStyle: {
      color: colors.white,
    },
    playBox: {
      height: height / 4,
      width: width / 1.2,
      borderRadius: Spaces.sm,
      backgroundColor:colors.lightgray
    },
    play: {
      textAlign: 'center',
      margin: Size.axl,
    },
  });
  return {styles};
};
