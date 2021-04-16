import React from "React"
import Facebook from "./Fragments/Facebook.js"
import Instagram from "./Fragments/Instagram.js"
import YouTube from "./Fragments/YouTube.js"

const Social = () => {
    return (
        <div className="social">
              <a
                href="https://www.facebook.com/MissionRidgeRange/"
                target="_blank"
                rel="noreferrer"
                title={"Facebook"}
              >
                <Facebook />
              </a>
              <a
                href="https://www.youtube.com/channel/UC5LaBuUcQPfdKbAuevQJEBQ"
                target="_blank"
                rel="noreferrer"
                title={"YoutTube"}
              >
                <YouTube />
              </a>
              {/* <a
                      href="https://www.linkedin.com/company/histaff/"
                      target="_blank"
                      rel={"noreferrer"}
                      title={"LinkedIn"}
                    >
                      <img alt={"LinkedIn"} src={iconLinkedin} />
                    </a>
                    <a
                      href="https://github.com/histaff"
                      target="_blank"
                      rel={"noreferrer"}
                      title={"GitHub"}
                    >
                      <img alt={"GitHub"} src={iconGitHub} />
                    </a> */}
              <a
                href="https://www.instagram.com/missionridgerange/"
                target="_blank"
                rel={"noreferrer"}
                title={"Instagram"}
              >
                <Instagram />
              </a>
            </div>
    )
}

export default Social