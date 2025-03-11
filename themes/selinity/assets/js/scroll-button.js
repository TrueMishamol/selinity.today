document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('scrollTarget').scrollIntoView({ behavior: 'smooth' });
});