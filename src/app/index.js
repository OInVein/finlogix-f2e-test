import styles from './index.module.scss';
import { logo } from './images';

const App = () => {
  return (
    <div className={styles.app}>
      {/** header */}
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          <img className={styles.headerLogoImg} src={logo} alt="logo" />
        </div>

        <nav className={styles.headerNavGroup}>
          <div className={styles.headerNavGroupDropDown}>
            <div className={styles.headerNavGroupDropDownButton}>
              Why ACY
              <i className={styles.arrowUp} />
            </div>
            <div className={styles.headerNavGroupDropDownContent}>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className={styles.headerNavGroupDropDown}>
            <div className={styles.headerNavGroupDropDownButton}>
              Products
              <i className={styles.arrowUp} />
            </div>
            <div className={styles.headerNavGroupDropDownContent}>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className={styles.headerNavGroupDropDown}>
            <div className={styles.headerNavGroupDropDownButton}>
              Platforms
              <i className={styles.arrowUp} />
            </div>
            <div className={styles.headerNavGroupDropDownContent}>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className={styles.headerNavGroupDropDown}>
            <div className={styles.headerNavGroupDropDownButton}>
              Education
              <i className={styles.arrowUp} />
            </div>
            <div className={styles.headerNavGroupDropDownContent}>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className={styles.headerNavGroupDropDown}>
            <div className={styles.headerNavGroupDropDownButton}>
              Partners
              <i className={styles.arrowUp} />
            </div>
            <div className={styles.headerNavGroupDropDownContent}>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </nav>

        <div className={styles.headerButtonGroup}>
          <div className={styles.headerButtonGroupLogin}>Login</div>
          <div className={styles.headerButtonGroupRegister}>Register</div>
        </div>
      </header>

      {/** main */}
      <main className={styles.main}>
        {/** banner */}
        <div className={styles.mainBanner}>
          <div className={styles.mainBannerTitle}>Forex Webinars</div>
          <div className={styles.mainBannerContent}>Whether you are new to foreign exchange trading or already have some market experience, we believe that a solid FX trading education is vital to your success as a trader.</div>
        </div>
        {/** cardList */}
        <div className={styles.mainCardList}>
          <div className={styles.mainCardListItem}>
            {/** item header */}
            <div className={styles.mainCardListItemHeader}>31/10/2011</div>

            {/** item content */}
            <div className={styles.mainCardListItemContent}>
              <div className={styles.mainCardListItemContentTopic}>
                A structured approach to deciphering FX & Gold sentiment
              </div>
              <div className={styles.mainCardListItemContentMessage}>
                Market scan across FX & Gold to determine sentiment with accuracy.
              </div>
              <div className={styles.mainCardListItemContentTime}>
                7pm-8:30pm EST
              </div>
            </div>

            {/** item footer */}
            <div className={styles.mainCardListItemFooter}>
              <div className={styles.mainCardListItemFooterText}>Register Now</div>
              <div className={styles.mainCardListItemFooterRegister} />
            </div>
          </div>

          <div className={styles.mainCardListItem}>
            {/** item header */}
            <div className={styles.mainCardListItemHeader}>31/10/2012</div>

            {/** item content */}
            <div className={styles.mainCardListItemContent}>
              <div className={styles.mainCardListItemContentTopic}>
                A structured approach to deciphering FX & Gold sentiment
              </div>
              <div className={styles.mainCardListItemContentMessage}>
                Market scan across FX & Gold to determine sentiment with accuracy.
              </div>
              <div className={styles.mainCardListItemContentTime}>
                7pm-8:30pm EST
              </div>
            </div>

            {/** item footer */}
            <div className={styles.mainCardListItemFooter}>
              <div className={styles.mainCardListItemFooterText}>Register Now</div>
              <div className={styles.mainCardListItemFooterRegister} />
            </div>
          </div>

          <div className={styles.mainCardListItem}>
            {/** item header */}
            <div className={styles.mainCardListItemHeader}>31/10/2013</div>

            {/** item content */}
            <div className={styles.mainCardListItemContent}>
              <div className={styles.mainCardListItemContentTopic}>
                A structured approach to deciphering FX & Gold sentiment
              </div>
              <div className={styles.mainCardListItemContentMessage}>
                Market scan across FX & Gold to determine sentiment with accuracy.
              </div>
              <div className={styles.mainCardListItemContentTime}>
                7pm-8:30pm EST
              </div>
            </div>

            {/** item footer */}
            <div className={styles.mainCardListItemFooter}>
              <div className={styles.mainCardListItemFooterText}>Register Now</div>
              <div className={styles.mainCardListItemFooterRegister} />
            </div>
          </div>

          <div className={styles.mainCardListItem}>
            {/** item header */}
            <div className={styles.mainCardListItemHeader}>31/10/2014</div>

            {/** item content */}
            <div className={styles.mainCardListItemContent}>
              <div className={styles.mainCardListItemContentTopic}>
                A structured approach to deciphering FX & Gold sentiment
              </div>
              <div className={styles.mainCardListItemContentMessage}>
                Market scan across FX & Gold to determine sentiment with accuracy.
              </div>
              <div className={styles.mainCardListItemContentTime}>
                7pm-8:30pm EST
              </div>
            </div>

            {/** item footer */}
            <div className={styles.mainCardListItemFooter}>
              <div className={styles.mainCardListItemFooterText}>Register Now</div>
              <div className={styles.mainCardListItemFooterRegister} />
            </div>
          </div>

          <div className={styles.mainCardListItem}>
            {/** item header */}
            <div className={styles.mainCardListItemHeader}>31/10/2015</div>

            {/** item content */}
            <div className={styles.mainCardListItemContent}>
              <div className={styles.mainCardListItemContentTopic}>
                A structured approach to deciphering FX & Gold sentiment
              </div>
              <div className={styles.mainCardListItemContentMessage}>
                Market scan across FX & Gold to determine sentiment with accuracy.
              </div>
              <div className={styles.mainCardListItemContentTime}>
                7pm-8:30pm EST
              </div>
            </div>

            {/** item footer */}
            <div className={styles.mainCardListItemFooter}>
              <div className={styles.mainCardListItemFooterText}>Register Now</div>
              <div className={styles.mainCardListItemFooterRegister} />
            </div>
          </div>

          <div className={styles.mainCardListItem}>
            {/** item header */}
            <div className={styles.mainCardListItemHeader}>31/10/2016</div>

            {/** item content */}
            <div className={styles.mainCardListItemContent}>
              <div className={styles.mainCardListItemContentTopic}>
                A structured approach to deciphering FX & Gold sentiment
              </div>
              <div className={styles.mainCardListItemContentMessage}>
                Market scan across FX & Gold to determine sentiment with accuracy.
              </div>
              <div className={styles.mainCardListItemContentTime}>
                7pm-8:30pm EST
              </div>
            </div>

            {/** item footer */}
            <div className={styles.mainCardListItemFooter}>
              <div className={styles.mainCardListItemFooterText}>Register Now</div>
              <div className={styles.mainCardListItemFooterRegister} />
            </div>
          </div>
        </div>

        {/** introduction */}
        <div className={styles.mainIntroduction}>
          <div className={styles.mainIntroductionDes}>
            <div className={styles.mainIntroductionDesTopic}>
              Meet Your Host - Alistair Schultz
            </div>
            <div className={styles.mainIntroductionDesContent}>
              With more than 15 years of experience covering both the FX and CFD markets, Alistair
              has extensive knowledge covering algorithmic trading, market analysis & an impressive
              educational background.
              <br />
              <br />
              As the author of ‘Essentials for Trading Students – An
              Overview of the Basics for Aspiring Traders’, which was released in 2017, Alistair
              will take any aspiring trader from the basics right through to advanced analytics used
              in institutional funds.
              <br />
              <br />
              At the core of Alistair’s teachings is the ability to help
              each trader uncover their ‘Trading DNA', helping them flourish with the skills and
              timeframes that work best for them.
              <br />
              <br />
            </div>
            <div className={styles.mainIntroductionDesMore}>
              See More <div className={styles.mainIntroductionDesMoreButton} />
            </div>
          </div>
          <div className={styles.mainIntroductionVideo}>
            <iframe width="820" height="461" src="https://www.youtube.com/embed/oLFol2uCp0w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

        <div className={styles.mainRegister}>
          <div className={styles.mainRegisterForm}></div>
        </div>
      </main>
    </div>
  );
}

export default App;
