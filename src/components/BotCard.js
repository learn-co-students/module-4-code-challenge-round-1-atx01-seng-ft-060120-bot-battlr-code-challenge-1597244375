import React from "react";

const BotCard = props => {
  const {id, name, health, damage, armor, bot_class, catchphrase, avatar_url} = props.bot;

  let army = props.army ? props.army : ""

  let botType;

  switch (bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
      default:
      botType = <div />;
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={id}
        onClick={!army.includes(props.bot) ? () => props.enlistBot(props.bot) : null}
      >
        <div className="image">
          <img alt="oh no!" src={avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {health}
          </span>

          <span>
            <i className="icon lightning" />
            {damage}
          </span>
          <span>
            <i className="icon shield" />
            {armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
