import React from 'react'

export const resume = (props) => {
    

    const education = props.main.education.map(function(education) {
        return(
        <div key={education.school}>
            <h2>{education.school}</h2>
            <p>
                <em>{education.degree}</em> <small>&bull; GPA: {education.gpa}</small>
                <br/>
                {education.graduated}
                
            </p>
            <p>
                {education.classes}
            </p>
        </div>)
    })

    const work = props.main.work.map(function(job) {
        return (
            <div key={job.company + job.title}>
                <h2>{job.company}</h2>
                <p>
                    <em>{job.title}</em>
                    <br/>
                    {job.years}
                    <br/>
                    {job.description}
                </p>
                {job.projects.map(function(project) {
                    return (
                        <div key={project.title}>
                            <h4 className='no-margin'>{project.title}:</h4>
                            <p className='indent'>
                                {project.description}
                            </p>
                            
                        </div>
                    )
                })}
                
            </div>
        )
    })


    const skills = (skillSet) => {
        return (
            skillSet.map(function(skill) {
                return(
                    <li key={skill.name} className='skill'>
                        <em>{skill.name}</em> &bull; {skill.level}
                        <div className='indent'>
                        {skill.description}
                        </div>
                        
                    </li>
                )
            })
            
        )

    }
        
    
  return (
    <div id='resume' className='resume'>
        <section id='education'>
            <div className='titleformat'>
            
                <div className='column title'>
                    <h1>Education</h1>
                </div>
                <div className='column content'>
                    {education}
                </div>
                
            </div>
        </section>

        <section id='experience'>
            <div className='titleformat'>
                <div className='column title'>
                    <h1>Experience</h1>
                </div>
                <div className='column content'>
                    {work}
                </div>
                
            </div>
        </section>


        <section id='skills'>
            <section id='skills'>
            
            </section>
            <section id='skills'>
                <div className='center midtitle'>
                    <h1>Skills &amp; Abilities</h1>
                    <em>Levels: Beginner, Novice, Intermediate, Advanced, and Expert</em>
                </div>


                <section id='techskills'>
                    <div className='titleformat nosep'>
                        <div className='column title'>
                            <h3>Technical</h3>
                        </div>
                        <div className='column slim level'>
                            <ul>
                            {skills(props.main.skills.technicalSkills.main)}
                            </ul>
                            <p className='center'>Additional: {props.main.skills.technicalSkills.additional}</p>
                        </div>
                        
                        
                    </div>

                </section>

                <section id='profskills'>
                    <div className='titleformat nosep'>
                        <div className='column title'>
                            <h3>Professional</h3>
                        </div>
                        <div className='column slim level'>
                            <ul>
                            {skills(props.main.skills.professionalSkills.main)}
                            </ul>
                        </div>
                    </div>
                </section>
                <section id='perskills'>
                    <div className='titleformat nosep'>
                        <div className='column title'>
                            <h3>Personal</h3>
                        </div>
                        <div className='column slim level'>
                            <ul>
                            {skills(props.main.skills.personalSkills.main)}
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </section>
        <section id='projects'>
            <h2>Projects</h2>
        </section>


        


        
        
    </div>
  )
}
export default resume;