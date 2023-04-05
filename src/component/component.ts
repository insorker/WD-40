export default interface WDComponent {
  body: Matter.Body
  elem: JQuery<HTMLElement>
  
  render(): void
}