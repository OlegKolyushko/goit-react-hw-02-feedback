import React from 'react';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback}) {
    return (
        <div>
            {options.map((option,index) => (
                <button type='button' name={option} key={index} onClick={onLeaveFeedback}>{option}</button>
            ))}
        </div>
    )
};
FeedbackOptions.propTypes = {
    option: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;