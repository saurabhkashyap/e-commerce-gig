import React from "react";
import { v1 } from "uuid";
import "../Authenticate/Field.css";
import PlacesAutocomplete from "react-places-autocomplete";
import "./Autocomplete.css";

const AutoComplete = (props) => {
  return (
    <PlacesAutocomplete
      value={props.input.value}
      onChange={props.input.onChange}
      searchOptions={props.options}
      onSelect={props.onSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="form-group form-input mt-3">
          <strong>
            {props.label}{" "}
            <span style={{ color: "#f76b1a" }}>{props.required}</span>
          </strong>
          <br />
          <input
            className="form-control authenticate-field"
            type={props.type}
            {...getInputProps({ onBlur: props.input.onBlur })}
          />

          <div style={{ color: "red" }}>
            {props.meta.touched && props.meta.error}
          </div>
          {suggestions.length > 0 && (
            <div className="city-locations">
              {loading && <div>Loading...</div>}

              {suggestions.map((suggestion) => (
                <React.Fragment key={v1()}>
                  <div {...getSuggestionItemProps(suggestion)}>
                    <div className="city-name">
                      <strong>{suggestion.formattedSuggestion.mainText}</strong>
                      <p>{suggestion.formattedSuggestion.secondaryText}</p>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default AutoComplete;
