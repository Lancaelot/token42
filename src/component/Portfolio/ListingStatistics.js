import React, { Component } from "react";
import Sectiontitle from "../Banner/Sectiontitle";
import anime from "animejs/lib/anime.es.js";
import CounterItem from "../Skill/CounterItem";
import Reveal from "react-reveal/Reveal/";

class Statistics extends Component {
  componentDidMount() {
    function countup(el, target) {
      let data = { count: 0 };
      anime({
        targets: data,
        count: [0, target],
        duration: 2000,
        round: 1,
        delay: 200,
        easing: "easeOutCubic",
        update() {
          el.innerText = data.count.toLocaleString();
        },
      });
    }

    function makeCountup(el) {
      const text = el.textContent;
      const target = parseInt(text, 10);

      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            countup(el, target);
            io.unobserve(entry.target);
          }
        });
      });

      io.observe(el);
    }

    const els = document.querySelectorAll("[data-countup]");

    els.forEach(makeCountup);
  }
  render() {
    var { pClass } = this.props;
    return (
      <section className={`portfolio_area ${pClass}`} id="statistics">
        <div className="container">
          <Sectiontitle
            Title="Listing statistics"
            TitleP="Some boring, but helpfull BSscan statistics"
          />
          <Reveal effect="fadeInUp">
            <div className="row">
              <CounterItem
                CText="200"
                pdescription="Total Holders"
                icon="briefcase"
              />
              <CounterItem
                CText="120"
                pdescription="TG Community"
                icon="happy"
              />
              <CounterItem
                CText="4"
                pdescription="Days since launch"
                icon="calendar"
              />
              <CounterItem CText="10" pdescription="ATH" icon="trophy" />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }
}

export default Statistics;
