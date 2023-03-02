import Color from '../../colors/Color'
import ITheme from '../ITheme'
import IThemeColors from '../IThemeColors'

export default class LightTheme implements ITheme {
  Colors: IThemeColors

  constructor() {
    this.Colors = {
      MAIN: new Color('#ffffff'),
      PRIMARY: new Color('#957fef'),
      SECONDARY: new Color('#111117'),
      TEXT_PRIMARY: new Color('#3A3B3C'),
      TEXT_SECONDARY: new Color('#ffffff'),
    }
  }
}
