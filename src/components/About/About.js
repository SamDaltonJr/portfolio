import React from 'react';

import './About.css';

import cowboys from '../../images/go-cowboys.jpg';
import hoos from '../../images/natty-champs.jpg';
import stonewallTalarico from '../../images/stonewall_talarico_pic.jpeg';
export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  toggle() {
    const showingMore = this.state.show;
    this.setState({ show: !showingMore });
  }

  render() {
    const { show } = this.state;
    let showMore;
    if (show) {
      showMore = (
        <div>
          <p>
            I've been coding ever since I was 15, starting off by learning Java
            in my AP Computer Science class as a high school sophomore. The
            following year I dove into the world of databases by taking Oracle
            Academy, a class offered through my high school where I learned SQL.
            Throughout college, my business classes used VBA in Microsft Excel
            and Visual Studio to help us run financial models. Despite all this
            prior experience in coding, I never truly thought of it as a
            legitimate career opportunity. In 2018, I finally decided to drop
            everything and learn how to build web applications and pursue a
            career in programming.
          </p>
          <p>
            In my free time, I try digesting sports in about any way possible,
            whether that be watching as many sporting events as feasibly
            possible or listening to sports radio and podcasts all day, particuarly DFW's{' '}
            <i>SportsRadio 1310 AM & 96.7 FM The Ticket</i> and <i>The Dumb Zone</i>. In the fall, my
            Sundays are dedicated to following my multiple fantasy football
            teams and the Dallas Cowboys, although I'm too young to even
            remember any of their Super Bowls. Come every March, my eyes are
            fixed on college basketball as I follow March Madness and pull for
            my Virginia Cavaliers, your <i>2019 NCAA National Champions</i>.
            Forget about whatever happened in 2018. I'll argue with any NBA fan
            that the 2011 Dallas Mavericks championship led by Dirk Nowitzki was
            the best NBA championship run in recent memory — and continues to
            age like fine wine with the rise of NBA superteams. I watch Luka Dončić
            highlight tapes hoping that someday he'll return to the Mavericks. My other sports teams include the Texas
            Longhorns, the Texas Rangers, and the Dallas Stars.
          </p>
          <ul className="sports-pics">
            <li>
              <img
                src={hoos}
                alt="Virginia Cavaliers 2019 National Champions"
              />
            </li>
            <li>
              <img src={cowboys} alt="2019 Cowboys-Seahawks game" />
            </li>
          </ul>
          <button onClick={this.toggle.bind(this)} className="read-button">
            Read Less
          </button>
        </div>
      );
    } else {
      showMore = (
        <div>
          <button onClick={this.toggle.bind(this)} className="read-button">
            Read More
          </button>
        </div>
      );
    }

    return (
      <div className="About-container">
        <div className="About-card">
          <h2>About me</h2>
          <p>
            I am a data scientist and programmer with experience performing
            statistical analysis with Python, pandas, and scikit-learn, as well as
            building web applications using Node.js, MongoDB, PostgreSQL, and React.
            I love working in tight-knit team environments, collaborating on ambitious
            projects and solving difficult problems with my teammates. My mind is
            extremely number-driven — quantitative problems are my favorite type of
            problems to crack.
          </p>
          <p>
            I graduated from the University of Virginia in May 2017 with a
            Bachelor of Science in Commerce. My concentrations were in Finance
            and Information Technology alongside a track in Quantitative
            Finance. My previous employers include a small tech start-up, the endowment of a large
            private research university, a regional bank, a real estate investment firm, an early
            stage venture capital firm, and a private wealth management firm.
            Between my education and past work experience, I am very well-versed
            in the world of finance, particularly investment management.
          </p>
          <p>
            I recently received an Honorable Mention in the NFL Big Data Bowl 2026
            Analytics competition for my work on "Closure Ratio" — a new metric that
            quantifies how effectively defenders close the gap to receivers during
            ball flight. The project involved analyzing over 12,000 NFL plays using
            statistical methods including bootstrap resampling and logistic regression.
          </p>
          <p>
            Outside of data science, I am actively involved in Texas politics. I
            volunteered as a canvasser and phone banker for the 2024 U.S. Senate race
            in Texas through the Dallas County Democratic Party, and I am currently volunteering
            for a campaign in the 2026 U.S. Senate race. I am a member of the Dallas
            Stonewall Democrats, Dallas County Young Democrats, and the Park Cities
            Area Democrats, where I serve on the communications committee.
          </p>
          <div className="politics-pic">
            <img
              src={stonewallTalarico}
              alt="Sam Dalton asking James Talarico a question at Dallas Stonewall Democrats event"
            />
          </div>
          {showMore}
        </div>
      </div>
    );
  }
}
