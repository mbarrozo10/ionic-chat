import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app3.ionic.starter',
  appName: 'app3',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
    },LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#488AFF",
    }
  },
};

export default config;
