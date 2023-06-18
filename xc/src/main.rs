use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};

use serde_json::json;

#[get("/api")]
async fn api() -> impl Responder {
    HttpResponse::Ok().json(json!({
        "msg": {
            "code": 200,
            "message": "success",
            "welcomemsg": "Welcome to V!"
        }
    }))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
        .service(api)
    })
        .bind(("127.0.0.1", 8080))?
        .run()
        .await
}