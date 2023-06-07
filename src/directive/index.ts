import hasPermi from './permisson/hasPermi'

export default function directive(app: any) {
  app.directive('hasPermi', hasPermi)
}
