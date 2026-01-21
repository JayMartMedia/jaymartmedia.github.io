# FFMPEG
FFMPEG is a FOSS for encoding audio and video: https://www.ffmpeg.org/

## Audio

### Re-encode .mp3 audio file as .wav
`ffmpeg -i someaudiofile.mp3 someaudiofile.wav`

## Video

### Re-encode to .mp4
`ffmpeg -i input.MP4 output.mp4`

### Rotate video

Rotate 90 clockwise:

`ffmpeg -i in.mov -vf "transpose=1" out.mov`
For the transpose parameter you can pass:

```txt
0 = 90° counterclockwise and vertical flip (default)
1 = 90° clockwise
2 = 90° counterclockwise
3 = 90° clockwise and vertical flip
```
Use `-vf "transpose=2,transpose=2"` for 180 degrees.

src: https://stackoverflow.com/a/9570992

## Crop video

`ffmpeg -i input.mp4 -filter:v "crop=w:h:x:y" output.mp4` - replace `crop=w:h:x:y` with something like `crop=1920:1080:0:0` 

## Gif

### Convert video to gif

Scale down 1080p video into 1/4: `ffmpeg -i "input-video.mkv" -s 960x540 output.gif`

## Add audio over video
`ffmpeg -i input-video.mp4 -i audio-overlay.mp3 -filter_complex "[0:a][1:a]amix=inputs=2:weights=1 .5[aout]" -map 0:v -map "[aout]" -c:v copy -shortest output-video-with-audio.mp4`

- `weights=1 .5` uses 100% volume for the original video, 50% volume for the overlay

