const AudioControls = ({ src }) => {
  return (
    <audio controls className="w-full rounded-md">
        <source src={src} type="audio/mp4"/>
        Your browser does not support this file.
    </audio>
  )
}

export default AudioControls