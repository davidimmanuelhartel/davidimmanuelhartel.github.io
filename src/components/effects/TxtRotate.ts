import { useEffect } from "react";

const TxtRotate = () => {
  useEffect(() => {
    class TxtRotate {
      toRotate: string[];
      el: HTMLElement;
      loopNum: number;
      period: number;
      txt: string;
      isDeleting: boolean;
      tempo: number;

      constructor(
        el: HTMLElement,
        toRotate: string[],
        period: string,
        tempo: string
      ) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = "";
        this.tick();
        this.isDeleting = false;
        this.tempo = parseFloat(tempo); // number between 1 and 100
      }

      tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = `<span class="wrap" style="line-height: 1.5;">${this.txt}</span>`;

        const that = this;
        let delta = Math.random() * this.tempo;

        if (this.isDeleting) {
          delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(() => {
          that.tick();
        }, delta);
      }
    }

    const elements = document.getElementsByClassName("txt-rotate");
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute("data-rotate") as string;
      const period = elements[i].getAttribute("data-period");
      const tempo = elements[i].getAttribute("data-tempo") as string; // high number == slow, small number == fast
      if (toRotate && period) {
        new TxtRotate(
          elements[i] as HTMLElement,
          JSON.parse(toRotate),
          period,
          tempo
        );
      }
    }

    // INJECT CSS
    const css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  }, []);

  return null;
};

export default TxtRotate;
