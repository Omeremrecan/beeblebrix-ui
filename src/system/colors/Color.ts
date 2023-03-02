import ColorHelper from '../../utilities/ColorHelper'
import IColor from './IColor'

export default class Color implements IColor {
  MAIN: string
  v_100: string
  v_200: string
  v_300: string
  v_400: string
  v_500: string
  v_600: string
  v_700: string
  v_800: string
  v_900: string

  constructor(mainColor: string) {
    this.MAIN = mainColor

    this.v_100 = ColorHelper.lighten(mainColor, 40)
    this.v_200 = ColorHelper.lighten(mainColor, 30)
    this.v_300 = ColorHelper.lighten(mainColor, 20)
    this.v_400 = ColorHelper.lighten(mainColor, 10)
    this.v_500 = mainColor
    this.v_600 = ColorHelper.darken(mainColor, 10)
    this.v_700 = ColorHelper.darken(mainColor, 20)
    this.v_800 = ColorHelper.darken(mainColor, 30)
    this.v_900 = ColorHelper.darken(mainColor, 40)
  }
}
