import React from "react";
import profilePicture from "../assets/my-pic.jpg";
import "../index.css";

const Profile = () => {
  return (
    <div>
      <div className="profile-container">
        <div>
          <img src={profilePicture} alt="profile" className="profile-details" />
        </div>
        <div style={{ marginLeft: "60px" }}>
          <p style={{ margin: 0 }}>Tariq Elouzeh</p>
          <p style={{ float: "left" }}>@jordaniandude</p>
        </div>
      </div>
      <div className="table-center">
        <table className="info">
          <colgroup>
            <col className="gray" />
            <col className="lightgray" />
          </colgroup>
          <tbody>
            <tr>
              <td>TestRail</td>
              <a
                rel="noopener noreferrer"
                href="https://testrail-mgmt.atlc-it.twitter.biz/testrail/index.php?/suites/view/48940"
                target="_blank"
              >
                <td>Test Cases Suite</td>
              </a>
            </tr>
            <tr>
              <td>JIRA</td>
              <a
                rel="noopener noreferrer"
                href="https://jira.twitter.biz/browse/ZAP-41"
                target="_blank"
              >
                <td>Automation Epic</td>
              </a>
            </tr>
            <tr>
              <td>Engineering Team</td>
              <a
                rel="noopener noreferrer"
                href="https://confluence.twitter.biz/pages/viewpage.action?pageId=127557034"
                target="_blank"
              >
                <td>Curation Tooling</td>
              </a>
            </tr>
            <tr>
              <td>Bugs Found by Automation</td>
              <a
                rel="noopener noreferrer"
                href="https://jira.twitter.biz/issues/?jql=project%20in%20(Zapdos)%20AND%20labels%20in%20(webtf-automation-bug)"
                target="_blank"
              >
                <td>Link to JIRA</td>
              </a>
            </tr>
            <tr>
              <td>Tests Stability Rate</td>
              <td>99%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
