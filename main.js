function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio : true});

    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vKEP6jR5f/model.json'),modelReady;
}

function modelReady() 
{
    classifier.classify(gotResults);
}

function gotResults(error,results) 
{
    if (error) 
    {
        console.error(error);
    }
    else
    {
        console.log(results);

        random_number_r = Math.floor(Math.random() * 255) + 1 ;
        random_number_g = Math.floor(Math.random() * 255) + 1 ;
        random_number_b = Math.floor(Math.random() * 255) + 1 ;
    
        document.getElementById("result_label").innerHTML = 'I CAN HEAR - '+ results[0].label;
        document.getElementById("accuracy_label").innerHTML = 'ACCURACY - '+ (results[0].confidence * 100).toFixed(2) + "%";

        document.getElementById("result_label").style.color = "rgb ("+random_number_r + " , " + random_number_g + " , " + random_number_b + ")";
        document.getElementById("accuracy_label").style.color = "rgb ("+random_number_r + " , " + random_number_g + " , " + random_number_b + ")";

        sounds_images = document.getElementById("sounds_images");

        if (results[0].label == "background noise") 
        {
            sounds_images = "https://illustoon.com/photo/5556.png";
        }
        else if (results[0].label == "barking")
        {
            sounds_images = "https://lh3.googleusercontent.com/proxy/aeJVAeZQXEjXMe_02SM8tFvj1Y3Efrwa8e7EgBgSRx8A7X2KtnDcUkgbvcedoYhTRbbHRNkSBNjc76W3-QyLVWlsCs4f--EKNw3lpg2k_WVvnrCCkZevLhf0_oA7Az9nfoUxoZwHuf2NKp3G1PQIbw";
        }
        else if (results[0].label == "meowing") 
        {
            sounds_images = "https://previews.123rf.com/images/teolin/teolin1506/teolin150600002/40922655-cute-cartoon-cat-with-speech-bubble-saying-meow.jpg";  
        }
        else 
        {
            sounds_images = "https://previews.123rf.com/images/dazdraperma/dazdraperma1003/dazdraperma100300095/6658864-illustration-of-running-beautiful-golden-horse.jpg";
        }
        
    }
}