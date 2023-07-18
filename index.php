<?php include('./template/header.php') ?>

<script type="module" src="./src/timer.js"></script>

<div class="position-relative center-timer">
    <div class="position-absolute top-50 start-50 translate-middle">
        <h1 id="contador" class="text-white">0.00</h1>
    </div>
    <div class="col-4">
        <table class="table table-dark table-striped" id="tablaSolve">
            <thead>
                <tr>
                    <th>Solve time</th>
                    <th>Algoritmo</th>
                    <th>Tiempo de inspección</th>
                </tr>
            </thead>
            <tbody id="tbody">
                
            </tbody>
        </table>
    </div>
</div>

<?php include('./template/footer.php') ?>