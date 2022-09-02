import "./Pricing.css";

import { BiCheckboxSquare } from "react-icons/bi";

function Pricing() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="table centered">
        <div className="rows">
          <div className="column">
            <ul className="price">
              <li className="header">
                <br />
                <br />
                Features
              </li>
              <li>Centralized Teams</li>
              <li>Version History</li>
              <li>Plugin Administrator</li>
              <li>Facebook & Instagram Ads</li>
              <li>Design System Analytics</li>
              <li>Unlimited cloud storage</li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Free
                <br />
                <span className="dollar">0</span>
                <p>per user per month</p>
                <div className="button_cont" align="center">
                  <a className="btn" target="_blank" rel="nofollow noopener">
                    Free Trail
                  </a>
                </div>
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Master
                <br />
                <span className="dollar">25</span>
                <p>per user per month</p>
                <div className="button_cont" align="center">
                  <a className="btn" target="_blank" rel="nofollow noopener">
                    Master
                  </a>
                </div>
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Organization
                <br />
                <span className="dollar">50</span>
                <p>per user per month</p>
                <div className="button_cont" align="center">
                  <a className="btn" target="_blank" rel="nofollow noopener">
                    Go Premium
                  </a>
                </div>
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
