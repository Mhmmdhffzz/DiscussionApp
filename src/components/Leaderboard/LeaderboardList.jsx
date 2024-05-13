import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem, { leaderboardItemShape } from './Leaderboarditem';

function LeaderboardList({ leaderboards }) {
  return (
    <div className="m-7">
      <header className="bg-gray-200 p-2 mb-2 rounded-lg">
        <p className="leaderboards-list__user-label font-semibold">Users</p>
        <p className="leaderboards-list__score-label font-semibold">Score</p>
      </header>
      <div className="leaderboards-list__item">
        {
          leaderboards.map((leaderboard, index) => (
            // eslint-disable-next-line react/no-array-index-key, react/jsx-props-no-spreading
            <LeaderboardItem key={index} {...leaderboard} />
          ))
        }
      </div>
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape)).isRequired,
};

export default LeaderboardList;
