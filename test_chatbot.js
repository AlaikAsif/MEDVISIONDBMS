const chatInput = document.querySelector(".chat-input textarea");
const sendChatBotButton = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
let userMessage;

const questionsAndAnswers = () => [
    {"question": "What is MedVision?", "answer": "MedVision is a cutting-edge platform that harnesses the power of Augmented Reality (AR) to revolutionize healthcare. Imagine surgeons visualizing a patient's internal organs overlaid on their body in real-time, or therapists guiding patients through rehabilitation exercises with interactive feedback. That's the potential of MedVision."},
    {"question": "How does MedVision work?", "answer": "MedVision utilizes specialized headsets or smart glasses that superimpose digital information onto the physical world. This information can include 3D medical scans, patient data, treatment protocols, and even virtual simulations. By seamlessly blending the digital and physical realms, MedVision empowers healthcare professionals to make better-informed decisions, perform procedures with greater precision, and ultimately, improve patient outcomes."},
    {"question": "What are some specific applications of MedVision?", "answer": "The possibilities are endless, but here are a few exciting examples\Surgery: Surgeons can overlay pre-operative scans onto the patient's body, allowing for more precise navigation and minimizing the risk of complications. Imagine a surgeon having a real-time map of the patient's vascular system displayed right before their eyes during a delicate procedure.\
    \nMedical Training: Aspiring doctors can immerse themselves in interactive 3D models of the human body, practicing procedures and honing their skills in a safe, virtual environment. This can significantly reduce the reliance on animal models and cadavers, leading to a more ethical and efficient training process.\
    \nPhysical Therapy: Therapists can provide patients with real-time feedback on their movements through AR overlays, ensuring they perform exercises correctly and maximize their recovery potential. Imagine a physical therapist guiding a patient through rehabilitation exercises with virtual markers highlighting the proper form and range of motion.\
    \nRemote Healthcare: AR can bridge the gap between patients and healthcare providers, enabling remote consultations and diagnosis with increased accuracy and efficiency. Imagine a doctor in a rural area using AR to examine a patient in another location, virtually auscultating their lungs or inspecting their skin for potential diagnoses."},
    {"question":"What are the benefits of using MedVision?", "answer": "The potential benefits of MedVision are vast and multifaceted\\nImproved Accuracy and Precision: AR can enhance visualization and provide real-time guidance, leading to more accurate diagnoses and more precise surgical procedures.\
    \nEnhanced Efficiency and Productivity: AR can streamline workflows, reduce surgical times, and optimize resource allocation within healthcare systems.\
    \nReduced Costs: By improving accuracy and efficiency, MedVision can potentially lead to significant cost savings in the long run.\
    \nImproved Patient Outcomes: Ultimately, the goal of MedVision is to improve patient outcomes through better diagnosis, treatment, and rehabilitation."},
    {"question":"What are the challenges and limitations of MedVision?", "answer": "As with any new technology, MedVision faces certain challenges:\
    \nCost and Accessibility: AR technology can be expensive, and making it widely accessible across healthcare systems requires significant investment.\
    \nData Privacy and Security: Ensuring the secure storage and transmission of sensitive patient data within AR applications is crucial.\
    \nEthical Considerations: The use of AR in healthcare raises ethical concerns regarding patient autonomy and informed consent."},
    {"question":"What is the future of MedVision?", "answer": "The future of MedVision is brimming with possibilities. As AR technology continues to evolve and become more affordable, we can expect to see even more innovative applications emerge. From personalized medicine to remote surgery, the potential of MedVision to transform healthcare is truly limitless.\
    By embracing AR through platforms like MedVision, we can usher in a new era of healthcare that is more accurate, efficient, and ultimately, focused on delivering better outcomes for every patient."}
];

const questionsandAnswers = questionsAndAnswers();

//Function to handle chat outgoing messages 
const createChatLI =  (message,className) => {
    const ChatLi = document.createElement("LI");
    ChatLi.classList.add("chat",className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : ` <span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    ChatLi.innerHTML = chatContent;
    return ChatLi;
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;
    chatbox.appendChild(createChatLI(userMessage,"outgoing"));
    const matchedQuestion = questionsandAnswers.find(qa => userMessage.toLowerCase().includes(qa.question.toLowerCase()));
    setTimeout(() => {
        // If a matching question is found, display the corresponding answer
        if (matchedQuestion) {
            chatbox.appendChild(createChatLI(matchedQuestion.answer, "incoming"));
        } else {
            // If no matching question is found, display a default message
            chatbox.appendChild(createChatLI("I do not understand your query. Please try again.", "incoming"));
        }
    }, 600);
    chatInput.value = "";
}
  
document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".faq .question");
    questions.forEach(function(question) {
      question.addEventListener("click", function() {
        const answer = this.nextElementSibling;
        answer.classList.toggle("active");
      });
    });
  });
  
sendChatBotButton.addEventListener("click",handleChat);


function toggle_chatbot(){
    console.log("running");
    let but = document.getElementById("chatbot");
    let button = document.getElementById("chatbot-toggler"); 
    console.log(but.style.display);
    if (but.style.display == ""){
        but.style.display = "none";
        button.innerHTML = '\n<span class="material-symbols-outlined">mode_comment</span>\n <span class="material-symbols-outlined">smart_toy</span>\n    '
    }
    else if(but.style.display == "none"){
        but.style.display = "";
        button.innerHTML = '\n<span class="material-symbols-outlined">mode_comment</span>\n <span class="material-symbols-outlined">close</span>\n    '
    }
}