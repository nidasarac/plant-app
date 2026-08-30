import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';

import { horizontalScale, moderateScale, verticalScale } from '@/constants/layout';
import { colors, fonts } from '@/constants/theme';

const MESSAGES = [
  'Getting things ready...',
  'Preparing your plants...',
  'Almost there...',
];

// don't let the splash just flash by on a fast boot
const MIN_VISIBLE = 2600;
// bar creeps to 90%, jumps to 100% when the app is actually ready
const CREEP_DURATION = 2400;

type AnimatedSplashProps = {
  ready: boolean;
  onFinish: () => void;
};

export default function AnimatedSplash({ ready, onFinish }: AnimatedSplashProps) {
  const enter = useRef(new Animated.Value(0)).current;
  const progress = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const [messageIndex, setMessageIndex] = useState(0);
  const [minVisiblePassed, setMinVisiblePassed] = useState(false);

  useEffect(() => {
    Animated.timing(enter, {
      toValue: 1,
      duration: 450,
      easing: Easing.out(Easing.back(1.4)),
      useNativeDriver: true,
    }).start();

    Animated.timing(progress, {
      toValue: 0.9,
      duration: CREEP_DURATION,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [enter, progress]);

  useEffect(() => {
    const id = setInterval(() => {
      setMessageIndex((i) => (i + 1) % MESSAGES.length);
    }, 1100);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setMinVisiblePassed(true), MIN_VISIBLE);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!ready || !minVisiblePassed) {
      return;
    }
    Animated.sequence([
      Animated.timing(progress, {
        toValue: 1,
        duration: 260,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 320,
        delay: 140,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      if (finished) {
        onFinish();
      }
    });
  }, [ready, minVisiblePassed, progress, opacity, onFinish]);

  const fillWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <View style={styles.center}>
        <Animated.View
          style={{
            opacity: enter,
            transform: [
              { scale: enter.interpolate({ inputRange: [0, 1], outputRange: [0.7, 1] }) },
            ],
          }}
        >
          <Ionicons name="leaf" size={moderateScale(44)} color={colors.primary} />
        </Animated.View>

        <Animated.Text
          style={[
            styles.wordmark,
            {
              opacity: enter,
              transform: [
                {
                  translateY: enter.interpolate({
                    inputRange: [0, 1],
                    outputRange: [verticalScale(12), 0],
                  }),
                },
              ],
            },
          ]}
        >
          PlantApp
        </Animated.Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.message}>{MESSAGES[messageIndex]}</Text>
        <View style={styles.track}>
          <Animated.View style={[styles.fill, { width: fillWidth }]} />
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    elevation: 10,
    backgroundColor: colors.splash,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    gap: verticalScale(16),
  },
  wordmark: {
    fontFamily: fonts.extraBold,
    fontSize: moderateScale(30),
    letterSpacing: -0.5,
    color: colors.text,
  },
  footer: {
    position: 'absolute',
    bottom: verticalScale(72),
    alignItems: 'center',
    gap: verticalScale(16),
  },
  message: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(14),
    letterSpacing: 0.07,
    color: colors.textMuted,
  },
  track: {
    width: horizontalScale(180),
    height: verticalScale(4),
    borderRadius: verticalScale(2),
    backgroundColor: colors.track,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: verticalScale(2),
    backgroundColor: colors.primary,
  },
});
