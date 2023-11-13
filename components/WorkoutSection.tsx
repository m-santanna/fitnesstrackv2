const WorkoutSection = async (props: any) => {
  const renderSetsInfo = (set: any) => {
    const infoArray = []
    for (let i = 0; i < set.reps.length; i++) {
      infoArray.push(
        <div className="w-full flex items-center justify-between py-2 font-extralight">
          <p className="px-2">{i + 1}.</p>
          <div className="flex">
            <p className="px-2">Weight: {set.currentWeight[i].toString()}</p>
            <p className="px-2">Reps: {set.reps[i]}</p>
          </div>
        </div>
      )
    }
    return infoArray
  }

  const renderSets = (sets: any) => {
    const setsArray = []
    for (let i = 0; i < sets.length; i++) {
      setsArray.push(
        <div className="flex flex-col justify-center items-center border border-white/40">
          <h1 className="text-xl p-4">{sets[i].exerciseName}</h1>

          {renderSetsInfo(sets[i])}
        </div>
      )
    }
    return setsArray
  }

  return <div className="w-8/12">{renderSets(props.sets)}</div>
}

export default WorkoutSection
