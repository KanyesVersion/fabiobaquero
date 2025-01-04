const AudioControls = ({ src }) => {
  return (
    <audio controls className="w-full bg-green-900 rounded-md">
        <source src={src} type="audio/mp4"/>
        Your browser does not support audio.
    </audio>
  )
}

export default AudioControls