 const score = {
            win: 0,
            lose: 0,
            tie: 0
        };
        scoreUpdate()
        const scoreString = localStorage.getItem('score');
        if (scoreString) {
            const savedScore = JSON.parse(scoreString);
            score.win = savedScore.win;
            score.lose = savedScore.lose;
            score.tie = savedScore.tie;
        }
        function playGame(userMove) {
            const cpMove = computerMove();

            let result = ``;

            if (userMove === 'Rock') {
                if (cpMove === 'Rock') {
                    result = `Tie`;
                }
                else if (cpMove === 'Paper') {
                    result = `Your Lose`;
                }
                else if (cpMove === 'Scissors') {
                    result = 'Your Win';
                }
            } else if (userMove === 'Paper') {
                if (cpMove === 'Rock') {
                    result = `Your Win`;
                }
                else if (cpMove === 'Paper') {
                    result = `Tie`;
                }
                else if (cpMove === 'Scissors') {
                    result = 'Your Lose';
                }

            } else if (userMove === 'Scissors') {
                if (cpMove === 'Rock') {
                    result = `Your Lose`;
                }
                else if (cpMove === 'Paper') {
                    result = `Your Win`;
                }
                else if (cpMove === 'Scissors') {
                    result = 'Tie';
                }

            }

            if (result === `Your Win`) {
                score.win += 1;
            }
            else if (result === `Your Lose`) {
                score.lose += 1;
            }
            else if (result === `Tie`) {
                score.tie += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));
            scoreUpdate();

            document.querySelector('.moves').innerHTML = `
               You <img src="${userMove}.jpg" alt="rock" width="50px" height="50px">
        <img src="${cpMove}.jpg" alt="rock" width="50px" height="50px">Computer`;
            document.querySelector('.js-result').innerHTML = `
              ${result}`;

        }
        function resetGame() {
            score.win = 0;
            score.lose = 0;
            score.tie = 0;
            localStorage.removeItem('score');
        }
        function scoreUpdate() {

            document.querySelector('.js-score').innerHTML = `
              Wins: ${score.win},Losses: ${score.lose},Ties: ${score.tie}`;
        }

        function computerMove() {
            const random = Math.random();

            if (random > 0 && random < 1 / 3) {
                cpMove = `Rock`;
            } else if (random > 1 / 3 && random < 2 / 3) {
                cpMove = `Paper`;
            } else if (random > 2 / 3 && random < 1) {
                cpMove = `Scissors`;
            }
            return cpMove;
        }
