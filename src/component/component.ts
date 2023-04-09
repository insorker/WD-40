export type WDBody = Matter.Body;
export type WDElem = JQuery<HTMLElement>;

export abstract class WDComponent {
  abstract body: WDBody
  abstract elem: WDElem

  reposition(replaceElem: WDElem, parentElem: WDElem) {
    replaceElem.attr(
      "WD-40-disable", "true"
    );
    this.elem.replaceWith(replaceElem);
    parentElem.append(this.elem);
  }

  abstract render(): void
}