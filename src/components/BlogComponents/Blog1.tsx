import { ContainerPages } from "../ContainerPages";
import { ArrowBack } from "../ProjectsComponents/ArrowBack";

export const Blog1 = () => {
  return (
    <ContainerPages>
      <div className="border-b-2 border-slate-600 border-dashed pb-8">
        <ArrowBack to="/blogs" />
        <h1 className="text-2xl font-mono font-semibold mt-8 mb-2">Giving children agency in an era of artificial intelligence</h1>
        <p className="font-semibold text-lg">29 September 2022</p>
      </div>

      <div>
        <h1 className="text-lg font-mono font-semibold mt-8 mb-2">AI can empower children to control and monitor their learning</h1>
        <div className="p-8">
          <img src="/images/blog1.jpeg" alt="child" className="rounded-2xl overflow-hidden" />
          <p>Photo by Ground Picture from shutterstock.com</p>
        </div>

        <p>
          Technology and artificial intelligence (AI) impact many aspects of children's lives. AI is playing an ever more important role in both children's learning and their future work lives. Schools are embracing learning technologies
          that automate such tasks as providing feedback, selecting appropriate learning materials, and aligning curricula to the needs of students. At the same time, jobs increasingly rely on technology and AI. Young people may one day
          aspire to be a quantum machine learning analyst or personal memory curator, while older jobs such as cashier, mail carrier, or bookkeeper may disappear. Children today need to be prepared for these changes and able to collaborate
          with different forms of AI. We believe that children should be active participants when learning and living with AI, and this requires that they develop new capabilities and skills.
        </p>

        <h1 className="text-lg font-mono font-semibold mt-8 mb-2">Self-regulated learning</h1>
        <p>
          If desirable work skills are taught at a young age, children can continue to develop them throughout their school years. One such skill is the control and monitoring of their own learning, also known as self-regulated learning.
          This enables learners to proactively transform mental abilities into academic skills by self-generating thoughts, feelings, and behaviors that help them achieve their goals.
        </p>
        <p className="my-4">
          Students who can self-regulate their learning in this way are well equipped to navigate the faster pace of life in the age of AI. They can understand and manage their limitations during learning. Yet although self-regulated
          learning skills yield academic benefits, children are not given enough opportunities in school to explore and practice these skills with their teachers' support. When children use informal digital learning apps, they may have too
          much freedom, which results in unproductive learning. Paradoxically, they may receive too much support when using more formal educational technologies. Even more worrying is that AI may take more control in the future and fully
          automate the learning process, further suppressing opportunities for children to develop important self-regulated learning skills.
        </p>
        <h1 className="text-lg font-mono font-semibold mt-8 mb-2">Learner and teacher agency</h1>
        <p>
          When children are developing self-regulated learning skills, agency – the freedom to take control of their learning – is central. But when working with digital educational tools, it is not always clear who is in charge. Is it the
          learner, the teacher, or the AI tool? Digital educational tools collect large amounts of data on learning, and AI can use this information to gain a deeper understanding of learning processes. Can we then also use data and AI
          algorithms to empower learners and teachers, and to provide them with agency? We believe so. But to achieve this, learners and teachers need stronger skills to make the most of AI support.
        </p>
        <p className="my-4">
          First, learners and teachers must be able to adapt to new situations and tasks, as societal changes are happening more frequently in the era of AI. More and more digital tools will be brought into classrooms, and teachers and
          students will need to collaborate as they look for ways to use them effectively.{" "}
        </p>
        <p className="my-4">
          Second, learners and teachers need to collaborate productively and proficiently with both humans and AI. When students work with technology in a group, positive social interactions and regulation skills like planning and
          monitoring are key for learning.
        </p>
        <p>Third, learners need socio-emotional support to tackle challenging problems. Teachers, caregivers, and technology can provide that support to help students understand and manage their own emotional states and motivation</p>
        <p>
          Lastly, students need to make small-scale adaptations in strategies in order to advance. For example, they can take initiative, set goals, and monitor themselves when working with others and with AI. All these skills and
          competencies are crucial for giving learners and teachers agency. We therefore believe that they should be a key focus in education systems.
        </p>
        <h1 className="text-lg font-mono font-semibold mt-8 mb-2">Towards an AI that empowers learners and teachers</h1>
        <p>
          There are two approaches to the use of AI in educational settings. In one, teachers' tasks are offloaded to the AI system, which acts as a tutor for each student. Smart technology that tailors content to individual learners is
          already in widespread use in many classrooms, in the form of Intelligent Tutor Systems. An alternative role for AI is to augment human intelligence and empower us to learn and teach more effectively. This approach, too, is already
          in practice, for example in teacher dashboards that provide real-time information about student performance, and in adaptive learning technologies that allow teachers and AI to orchestrate classroom teaching collaboratively.
        </p>
        <p className="my-4">
          We believe that this second approach is more effective at supporting students in their attempts to control and monitor their learning. The learning path app, for example, promotes self-regulated learning by providing personalized
          visualisations of students' internal regulation processes. Learners and AI can work together and learn from each other: Learners explain to the AI how they monitor their learning, and the AI provides data and shows productive
          learning patterns to the learner. Through this interaction, both the student and the AI advance and adapt. Ultimately, if used well, AI can help learners control and monitor their own learning, enabling them to live and work
          successfully in the AI era.
        </p>
        <p className="my-4">
          In the interest of an evidenced-based view of the role of AI in education, the Jacobs Foundation recently funded the Center for Learning and Living with AI (CELLA), which is designed to equip young learners to learn, live, and
          work in the age of AI. The global center will bring together research teams in the fields of learning and educational sciences, learning analytics, and artificial intelligence to develop and research AI-driven learning
          technologies that ensure children's wellbeing. CELLA is co-led by Sanna Järvelä from the University of Oulu (Finland) and Inge Molenaar from Radboud University (the Netherlands). They are working with Maria Bannert from the
          Technical University of Munich (Germany), Dragan Gašević from Monash University (Australia), and Roger Azevedo from the University of Central Florida (United States)
        </p>
      </div>
    </ContainerPages>
  );
};
