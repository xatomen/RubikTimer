<?php include('./template/header.php') ?>

<script type="module" src="./src/timer.js"></script>

<div class="position-relative center-timer">
    <div class="position-absolute start-0 top-0">
        <div class="card transparent border border-white mb-2">
            <table class="Geologica text-white m-2 p-2" id="">
                <thead>
                    <tr>
                        <th>Average:</th>
                        <th id="avg">-</th>
                    </tr>
                    <tr>
                        <th>Average 5:</th>
                        <th id="avg5">-</th>
                    </tr>
                    <tr>
                        <th>Average 12:</th>
                        <th id="avg12">-</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
        <div class="card transparent border border-white mb-5">
            <table class="Geologica text-white m-2 p-2" id="tablaSolve">
                <thead>
                    <tr>
                        <th class="pe-4">N°</th>
                        <th>Solve time</th>
                        <!-- <th>Algoritmo</th> -->
                        <!-- <th>Tiempo de inspección</th> -->
                    </tr>
                </thead>
                <tbody id="tbody">
                    <!-- Nuevas filas -->
                </tbody>
            </table>
        </div>
    </div>
    <div class="position-absolute top-50 start-50 translate-middle Geologica ">
        <h1 id="contador" class="text-white" style="font-size: 10vw;">00.00</h1>
    </div>
</div>


<?php include('./template/footer.php') ?>