

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();


const event = {
  title: "Midnattsloppet, 1 september",
  description: "Ett lopp i Göteborg vid midnatt",
  eventLink: "https://midnattsloppet.com"
}


const response = await fetch('http://localhost:5020/event', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(event)
});


const data = await response.json();

console.log("data:", data);
}