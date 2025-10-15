
const testimonials = [
    {
        quote: "Understanding Spirit has transformed my life. The insights and guidance I've received are invaluable.",
        author: "Alex P.",
        imageUrl: "images/testimonials/small/alexW-min.png",
        alter: "Photo of Alex P."
    },
    {
        quote: "The community here is so supportive. I've found a sense of belonging and purpose.",         
        author: "Jamie L.",
        imageUrl: "images/testimonials/small/jamieA-min.png",
        alter: "Photo of Jamie L."
    },
    {
        quote: "The resources and teachings are top-notch. I feel more connected to my spiritual journey than ever before.",    
        author: "Taylor R.",
        imageUrl: "images/testimonials/small/taylorS-min.png",
        alter: "Photo of Taylor R."
    }
];
let section= document.getElementById('testimonials');
testimonials.forEach(testimonial => {
    let testimonialDiv = document.createElement('div');
    testimonialDiv.className = 'testimonial';

    let img = document.createElement('img');
    img.loading = 'lazy';
    img.src = testimonial.imageUrl;
    img.alt = testimonial.alter;

    let quote = document.createElement('p');
    quote.className = 'quote';
    quote.textContent = `"${testimonial.quote}"`;

    let author = document.createElement('p');
    author.className = 'author';
    author.textContent = `- ${testimonial.author}`;

    testimonialDiv.appendChild(img);
    testimonialDiv.appendChild(quote);
    testimonialDiv.appendChild(author);

    section.appendChild(testimonialDiv);
});



