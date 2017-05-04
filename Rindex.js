var quotes = [
    'Love yourself. It is important to stay positive because beauty comes from the inside out.  -  Jenn Proske',
            
            'Live life to the fullest, and focus on the positive. -  Matt Cameron',
            
            'Stay positive and happy. Work hard and don\'t give up hope. Be open to criticism and keep learning. Surround yourself with happy, warm and genuine people.  - Tena Desae',
            
            'A strong, positive self-image is the best possible preparation for success.  - Joyce Brothers',
    
            'Once you replace negative thoughts with positive ones, you\'ll start having positive results.  - Willie Nelson',
    
            'Adopting the right attitude can convert a negative stress into a positive one.  - Hans Selye',
    
            'You cannot have a positive life and a negative mind.  - Joyce Meyer',
    
            'Work hard for what you want because it won\'t come to you without a fight. You have to be strong and courageous and know that you can do anything you put your mind to. If somebody puts you down or criticizes you, just keep on believing in yourself and turn it into something positive.  - Leah LaBelle',
    
            'I believe if you keep your faith, you keep your trust, you keep the right attitude, if you\'re grateful, you\'ll see God open up new doors.  - Joel Osteen',
    
            'Your smile will give you a positive countenance that will make people feel comfortable around you.  - Les Brown',
    
            'Find a place inside where there\'s joy, and the joy will burn out the pain.  - Joseph Campbell',
    
            'In order to carry a positive action we must develop here a positive vision.  - Dalai Lama'
           ];
document.getElementById('display').innerHTML=quotes[0];
//var r = Math.floor(Math.random()*(quotes.length));
//alert(r);
var i=1;
function change()
{
    if(i==(quotes.length)){i=0; }
    
    document.getElementById('display').innerHTML=quotes[i];
    i++
}