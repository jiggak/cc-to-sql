create table logs (
    log_type text not null,
    log_time text not null,
    log_text text,
    stool_type text,
    stool_volume numeric,
    suck_score numeric,
    tags text
);