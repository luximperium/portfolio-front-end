import { useEffect } from "react";

import Play from "./Play";
import Pause from "./Pause";
import Bar from "./Bar";
import SkrillexLux from "../../assets/skrillux.wav";
import AudioSpectrum from "react-audio-spectrum";
import { Grid } from "@material-ui/core";
import useAudioPlayer from "./useAudioPlayer";

function Audio() {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  } = useAudioPlayer();

  return (
    <div className="player">
      <audio id="audio">
        <source src={SkrillexLux} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <Grid container>
      <Grid item xs={12}>
          <div className="controls">
            {playing ? (
              <Pause handleClick={() => setPlaying(false)} />
            ) : (
              <Play handleClick={() => setPlaying(true)} />
            )}
          </div>
        </Grid>
        <Grid item xs={12}>
          <AudioSpectrum
            id="audio-canvas"
            height={"100vh"}
            width={"1800vw"}
            audioId={"audio"}
            capColor={"#e65100"}
            capHeight={5}
            meterWidth={10}
            meterCount={100}
            meterColor={[
              { stop: 0, color: "#e65100" },
              { stop: 1, color: "#ffa500" },
            ]}
            gap={10}
          />
        </Grid>
        <Grid item xs={12}>
          <Bar
            curTime={curTime}
            duration={duration}
            onTimeUpdate={(time) => setClickedTime(time)}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Audio;
